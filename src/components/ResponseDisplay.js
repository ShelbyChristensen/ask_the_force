function ResponseDisplay({ answer, image }) {
  return (
    <div className="response">
      <p className="response-text">
        Your answer: <strong>{answer.toUpperCase()}</strong>
      </p>
      {image && (
        <img src={image} alt={`Answer: ${answer}`} className="response-image" />
      )}
      <p className="note">Trust your instincts. One step at a time.</p>
    </div>
  );
}

export default ResponseDisplay;
