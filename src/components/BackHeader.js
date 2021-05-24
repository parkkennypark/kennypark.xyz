const BackHeader = () => {
  function goBack() {
    window.history.back();
  }

  return (
    <label id="back-button" onClick={goBack}>
      back
    </label>
  );
};

export default BackHeader;
