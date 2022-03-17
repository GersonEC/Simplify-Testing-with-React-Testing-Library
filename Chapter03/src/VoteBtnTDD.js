const VoteBtnTDD = props => {
  return (
    <button onClick={props.handleVote} disabled={props.hasVoted}>
      <img src={props.imgSrc} alt={props.altText}></img>
    </button>
  )
}

export default VoteBtnTDD
