'use client';

import { useBooking } from '@/components/booking/BookingProvider';
import { GOLF_COURSES } from '@/lib/services';

export function GolfItinerary() {
  const { state, dispatch } = useBooking();
  const val = (id: string) => state.fields[id] || '';
  const setField = (id: string, value: string) => dispatch({ type: 'SET_FIELD', id, value });

  return (
    <div className="bstep" style={{ marginTop: 26 }}>
      <div className="step-h">
        <span className="snum">◆</span>
        <h4>Your golf itinerary</h4>
        <span className="shint">Add each day and every course</span>
      </div>

      <div className="frow3">
        <div className="field">
          <label htmlFor="golfers">
            Golfers <span className="rq">*</span>
          </label>
          <input
            type="number"
            id="golfers"
            min={1}
            max={16}
            placeholder="e.g. 4"
            value={val('golfers')}
            onChange={(e) => setField('golfers', e.target.value)}
          />
          <div className="err">How many golfers?</div>
        </div>
        <div className="field">
          <label htmlFor="golfbags">Golf bags</label>
          <input
            type="number"
            id="golfbags"
            min={0}
            max={16}
            placeholder="e.g. 4"
            value={val('golfbags')}
            onChange={(e) => setField('golfbags', e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="extrabags">Other luggage</label>
          <select id="extrabags" value={val('extrabags')} onChange={(e) => setField('extrabags', e.target.value)}>
            <option>None</option>
            <option>Small — carry-ons</option>
            <option>Large — full suitcases</option>
          </select>
        </div>
      </div>

      <div>
        {state.golfDays.map((day, di) => (
          <div className="day" key={di}>
            <div className="day-h">
              <span className="dn">Day {di + 1}</span>
              <span className="dd">
                {day.stops.length} {day.stops.length === 1 ? 'course' : 'courses'}
              </span>
              {state.golfDays.length > 1 && (
                <button
                  type="button"
                  className="rm"
                  onClick={() => dispatch({ type: 'GOLF_REMOVE_DAY', day: di })}
                >
                  Remove day
                </button>
              )}
            </div>
            <div className="frow">
              <div className="field">
                <label>Date</label>
                <input
                  type="date"
                  value={day.date || ''}
                  onChange={(e) => dispatch({ type: 'GOLF_SET_DAY', day: di, patch: { date: e.target.value } })}
                />
              </div>
              <div className="field">
                <label>Pickup time</label>
                <input
                  type="time"
                  value={day.pickup || ''}
                  onChange={(e) => dispatch({ type: 'GOLF_SET_DAY', day: di, patch: { pickup: e.target.value } })}
                />
              </div>
            </div>

            {day.stops.map((stop, si) => (
              <div key={si}>
                <div className="stop">
                  <div className="field" style={{ margin: 0 }}>
                    <label>Course {si + 1}</label>
                    <select
                      value={stop.course || ''}
                      onChange={(e) =>
                        dispatch({ type: 'GOLF_SET_STOP', day: di, stop: si, patch: { course: e.target.value } })
                      }
                    >
                      <option value="">Select a course</option>
                      {GOLF_COURSES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field" style={{ margin: 0 }}>
                    <label>Tee time</label>
                    <input
                      type="time"
                      value={stop.tee || ''}
                      onChange={(e) =>
                        dispatch({ type: 'GOLF_SET_STOP', day: di, stop: si, patch: { tee: e.target.value } })
                      }
                    />
                  </div>
                  {day.stops.length > 1 ? (
                    <button
                      type="button"
                      className="x"
                      aria-label="Remove course"
                      onClick={() => dispatch({ type: 'GOLF_REMOVE_STOP', day: di, stop: si })}
                    >
                      ×
                    </button>
                  ) : (
                    <span />
                  )}
                </div>
                {stop.course && stop.course.indexOf('Other') === 0 && (
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Course name"
                      value={stop.other || ''}
                      onChange={(e) =>
                        dispatch({ type: 'GOLF_SET_STOP', day: di, stop: si, patch: { other: e.target.value } })
                      }
                    />
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              className="addbtn addStop"
              style={{ marginTop: 4, padding: '9px 14px' }}
              onClick={() => dispatch({ type: 'GOLF_ADD_STOP', day: di })}
            >
              + Add another course this day
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="addbtn" onClick={() => dispatch({ type: 'GOLF_ADD_DAY' })}>
        + Add a golf day
      </button>

      <div className="field" style={{ marginTop: 20 }}>
        <label htmlFor="stay">Where are you staying?</label>
        <input
          type="text"
          id="stay"
          placeholder="Hotel, resort or rental — your daily pickup point"
          value={val('stay')}
          onChange={(e) => setField('stay', e.target.value)}
        />
      </div>
      <div className="frow">
        <div className="field">
          <label htmlFor="clubstorage">Clubs stay in the vehicle between rounds?</label>
          <select id="clubstorage" value={val('clubstorage')} onChange={(e) => setField('clubstorage', e.target.value)}>
            <option>Yes — leave them with the driver</option>
            <option>No — we&rsquo;ll take them in each time</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="between">Between rounds</label>
          <select id="between" value={val('between')} onChange={(e) => setField('between', e.target.value)}>
            <option>Driver waits at the course</option>
            <option>Return to accommodation</option>
            <option>Lunch or sightseeing stop</option>
          </select>
        </div>
      </div>
    </div>
  );
}
