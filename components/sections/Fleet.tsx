export function Fleet() {
  return (
    <section className="sec stone" id="fleet">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">The Fleet</span>
          <h2>
            Vehicles for Local Rides, Airport Luggage <em>&amp; PEI Groups</em>
          </h2>
          <p>
            Tell us your passenger and luggage count. Dispatch confirms the vehicle with the
            space your trip actually requires.
          </p>
        </div>
        <div className="fleet-grid reveal">
          <article className="veh">
            <div
              className="vimg vimg-sedan"
              role="img"
              aria-label="Charlottetown Taxi executive sedan for city rides"
            />
            <div className="vbody">
              <h3>Sedan</h3>
              <div className="vtag">Comfortable city &amp; airport rides</div>
              <div className="vspecs">
                <div>
                  <strong>4</strong>Passengers
                </div>
                <div>
                  <strong>2</strong>Large bags
                </div>
                <div>
                  <strong>2</strong>Carry-on
                </div>
              </div>
            </div>
          </article>
          <article className="veh">
            <div
              className="vimg vimg-suv"
              role="img"
              aria-label="Charlottetown Taxi branded Ford Bronco Sport SUV parked at Charlottetown Airport arrivals"
            />
            <div className="vbody">
              <h3>SUV</h3>
              <div className="vtag">Extra comfort &amp; luggage space</div>
              <div className="vspecs">
                <div>
                  <strong>4</strong>Passengers
                </div>
                <div>
                  <strong>3</strong>Large bags
                </div>
                <div>
                  <strong>2</strong>Carry-on
                </div>
              </div>
            </div>
          </article>
          <article className="veh">
            <div
              className="vimg vimg-van"
              role="img"
              aria-label="Charlottetown Taxi branded passenger van for families and small groups"
            />
            <div className="vbody">
              <h3>Passenger Van</h3>
              <div className="vtag">Families &amp; small groups</div>
              <div className="vspecs">
                <div>
                  <strong>6-7</strong>Passengers
                </div>
                <div>
                  <strong>4</strong>Large bags
                </div>
                <div>
                  <strong>2</strong>Carry-on
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
