import React from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/authActions';

export class SendEmail extends React.Component {
  state = {
    email: '',
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })

  }

  handleSendEmail = (event) => {
    event.preventDefault();
    const { email } = this.state
    let data = { email }
    this.props.sendEmail(data);
    document.getElementById('closeModal').click();
  }

  render() {
    const { email } = this.state
    return (
      <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="exampleModalLabel">Reset Password</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="closeModal" >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handleSendEmail}>
                  <div className="form-group">
                    <h6><label htmlFor="email">Email</label><br /></h6>
                    <input name="email" type="email" value={email} onChange={this.handleInputChange} />
                  </div>
                  <div class="modal-footer form-group">
                    <button type="submit" class="btn ">Send Email</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { sendEmail })(SendEmail);
