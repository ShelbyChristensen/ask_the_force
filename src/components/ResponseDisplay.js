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
      <p className="note">Trust your instincts. One step at a time.</p>
    </div>
  );
}
export default ResponseDisplay;
