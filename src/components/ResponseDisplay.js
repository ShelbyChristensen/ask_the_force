function ResponseDisplay({ answer, image }) {
  return (
    <div className="response">
      <div className="response-bubble">
        <p className="response-text">
          Your answer: <strong>{answer.toUpperCase()}</strong>
        </p>
      </div>
      {image && (
        <img
          src={image}
          alt={`Answer: ${answer}`}
          className="response-image"
        />
      )}
      <p className="note">A meme a day keeps the indecision away.</p>
    </div>
  );
}
export default ResponseDisplay;
