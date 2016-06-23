var React = require('react');
var PropTypes = React.PropTypes;



var propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div class="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="input-control col-sm-12"
              placeholder="Enter a username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text'" />
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = propTypes;

module.exports = Prompt;