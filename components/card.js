export const Card = () => {
  return (
    <div className="cmn-box-wth-check">
      <div className="cmn-box-wth-check-icon">
        <img
          src="../../media/awajlj1v/stock-market.svg"
          alt="Daily Currency Updates"
        />
      </div>
      <h5 className="">Daily Market Analysis</h5>
      <div className="cmn-box-wth-check-des">
        Get daily intelligence and currency reports directly to your inbox.
      </div>
      <div className="cmn-box-wth-check-chk">
        <div className="custom-control custom-checkbox fancy-chk square-chk">
          <input
            className="custom-control-input interval"
            data-val="true"
            data-val-required="The Daily field is required."
            id="want1"
            name="Daily"
            type="checkbox"
            value="true"
          />
          <input name="Daily" type="hidden" value="false" />
          <label className="custom-control-label" for="want1">
            Sign me up:
          </label>
        </div>
      </div>
    </div>
  );
};
