import Loader from "react-loader-spinner";

export default function ButtonInPages({ buttonName, promise }) {
  return (
    <button type="submit" disabled={promise !== null ? true : false}>
      {promise !== null ? (
        <Loader type="ThreeDots" color="#FFFFFF" height={45} width={45} />
      ) : (
        buttonName
      )}
    </button>
  );
}
