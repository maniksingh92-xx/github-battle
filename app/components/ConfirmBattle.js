var React = require('react');

function ConfirmBattle(props) {
  return props.isLoading === true
  ? <p> Loading </p>
  : <div> loaded </div>
}

module.exports = ConfirmBattle;