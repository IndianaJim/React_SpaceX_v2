import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({
  launch: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    mission_patch_small
  }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div>
          <img src={mission_patch_small} alt="mission patch" />
        </div>
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': launch_success === false,
                'text-warning': launch_success === null
              })}
            >
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/Launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
