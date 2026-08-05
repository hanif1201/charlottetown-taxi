export function Fleet() {
  return (
    <section className="sec stone" id="fleet">
      <div className="wrap">
        <div className="head reveal">
          <span className="eyebrow eyebrow-dk">The Fleet</span>
          <h2>
            Matched to <em>your party and your bags</em>
          </h2>
          <p>Tell us how many are travelling and what you&apos;re bringing — dispatch assigns the right vehicle automatically.</p>
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
              <div className="vtag">Everyday city rides</div>
              <div className="vspecs">
                <div>
                  <strong>3</strong>Seats
                </div>
                <div>
                  <strong>3</strong>Bags
                </div>
              </div>
            </div>
          </article>
          <article className="veh">
            <div
              className="vimg vimg-suv"
              role="img"
              aria-label="Charlottetown Taxi executive SUV for PEI travel with extra luggage"
            />
            <div className="vbody">
              <h3>SUV</h3>
              <div className="vtag">Extra space &amp; winter roads</div>
              <div className="vspecs">
                <div>
                  <strong>4</strong>Seats
                </div>
                <div>
                  <strong>4</strong>Bags
                </div>
              </div>
            </div>
          </article>
          <article className="veh">
            <div
              className="vimg vimg-van"
              role="img"
              aria-label="Minivan taxi for families and group travel in Charlottetown"
            />
            <div className="vbody">
              <h3>Minivan</h3>
              <div className="vtag">Families &amp; groups</div>
              <div className="vspecs">
                <div>
                  <strong>6</strong>Seats
                </div>
                <div>
                  <strong>6+</strong>Bags
                </div>
              </div>
            </div>
          </article>
          <article className="veh">
            <div
              className="vimg vimg-group"
              role="img"
              aria-label="Multiple Charlottetown Taxi vehicles for group transport across PEI"
            />
            <div className="vbody">
              <h3>Group Transport</h3>
              <div className="vtag">Multiple vehicles</div>
              <div className="vspecs">
                <div>
                  <strong>7+</strong>Seats
                </div>
                <div>
                  <strong>Any</strong>Bags
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
