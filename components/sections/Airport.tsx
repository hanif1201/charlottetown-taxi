export function Airport() {
  return (
    <section className="sec" id="airport">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">Airport (YYG)</span>
          <h2>
            Charlottetown Airport (YYG) <em>Taxi &amp; Airport Transfers</em>
          </h2>
          <p>
            Charlottetown Airport sits six kilometres from downtown, and a taxi is the fastest way in
            and out of it at any hour. Our airport transfers start at $20 under the tariff published
            by the Charlottetown Airport Authority — the fare is confirmed before you travel and
            nothing is added at the terminal.
          </p>
        </div>
        <div className="steps reveal">
          <div className="stepc">
            <div className="sn">01</div>
            <h3>Arriving at YYG</h3>
            <p>
              Give us your flight number when you book and we track it. An early landing or a
              two-hour delay costs you nothing, because we adjust the pickup to the aircraft rather
              than the schedule. Your driver can meet you inside Arrivals with a name board or wait
              at the kerb — tell us which you prefer. There is no waiting charge for a delayed
              flight.
            </p>
          </div>
          <div className="stepc">
            <div className="sn">02</div>
            <h3>Departing from YYG</h3>
            <p>
              Most flights out of Charlottetown leave early, which means a taxi before dawn. Pre-book
              the night before and a vehicle is held for your exact time at no extra cost. Dispatch
              runs through the night, every night, including holidays and winter storms.
            </p>
          </div>
          <div className="stepc">
            <div className="sn">03</div>
            <h3>Where our airport passengers go</h3>
            <p>
              YYG to downtown Charlottetown is a fifteen-minute run at the published airport fare. We
              also run YYG to Cavendish and the north shore, to Summerside and the west, to the
              Brudenell resort area, to the Charlottetown cruise port, and off-Island to Halifax —
              all quoted and agreed before you travel.
            </p>
          </div>
          <div className="stepc">
            <div className="sn">04</div>
            <h3>Luggage, clubs and groups</h3>
            <p>
              Tell us what you are bringing and we assign the vehicle to match: a sedan for one or
              two with cases, an SUV for four with bags, a van for six, or multiple vehicles for a
              golf group or a wedding party arriving together. Golf clubs, ski bags and oversized
              luggage are never a problem if we know in advance.
            </p>
          </div>
        </div>
        <div className="ctwo reveal" style={{ marginTop: 40 }}>
          <a href="#book" className="btn btn-brass">
            Book Your YYG Transfer
          </a>
          <a href="tel:+17823777533" className="btn btn-outline">
            Call Dispatch (782) 377-7533
          </a>
        </div>
      </div>
    </section>
  );
}
