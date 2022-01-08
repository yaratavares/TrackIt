export default function InputsInPages({ inputs, promise, data, setData }) {
  function keyboardAnswer(input) {
    setData({ ...data, [input.name]: input.value });
  }

  return (
    <>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.field}
          name={input.name}
          onChange={(e) => keyboardAnswer(e.target)}
          placeholder={input.text}
          disabled={promise !== null ? true : false}
          required
        />
      ))}
    </>
  );
}
