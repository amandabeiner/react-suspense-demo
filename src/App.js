import React, { unstable_Suspense as Suspense, Component, Fragment} from "react";
import { unstable_scheduleCallback as scheduleCallback } from "scheduler";
import './index.css'

import Spinner from "./components/Spinner";
import Api from './api'
import UsersIndex from './components/UsersIndex';

const UserShow = React.lazy(() => import('./components/UserShow'))

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedMember: null,
      showUserDetails: false
    }

    this.api = new Api()
    this.setSelectedMember = this.setSelectedMember.bind(this)
    this.clearSelected     = this.clearSelected.bind(this)
  }

  setSelectedMember(selectedMember) {
    this.setState({ selectedMember })
    scheduleCallback(() => { this.setState({ showUserDetails: true })})
  }

  clearSelected() {
    this.setState({ selectedMember: null, showUserDetails: false })
  }

  render() {
    const { showUserDetails, selectedMember } = this.state
    return (
      <div className="App">
        {showUserDetails
          ? this.renderDetail(selectedMember)
          : this.renderList(selectedMember)
        }
      </div>
    )
  }

  renderDetail(member) {
    return (
      <Fragment>
        <button onClick={this.clearSelected}>Back to index</button>
        <Suspense maxDuration={3000} fallback={<Spinner size="large" />}>
          <UserShow member={member} clearSelected={this.clearSelected} />
        </Suspense>
      </Fragment>
    )
  }

  renderList(member) {
    return (
      <Suspense maxDuration={3000} fallback={<Spinner size="large" />}>
        <UsersIndex
          selectMember={this.setSelectedMember}
          loadingId={this.state.selectedMember}
        />
      </Suspense>
    )
  }
}

export default App
