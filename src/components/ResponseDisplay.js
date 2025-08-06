function ResponseDisplay({ answer, image }) {
  return (
    <div className="response">
      <p>The Force says: <strong>{answer.toUpperCase()}</strong></p>
      {image && <img src={image} alt={answer} />}
    </div>
  );
}

export default ResponseDisplay;
