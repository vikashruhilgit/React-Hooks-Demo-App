import { Fragment, useEffect, useState } from "react";

import axios from "../shared/axios";

const errorHandler = (Component) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        setError(err);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    return (
      <Fragment>
        {/* show error the way you like. */}
        <div> {error ? "ERROR - " + error.message : null}</div>
        <Component {...props} />
      </Fragment>
    );
  };
};

export default errorHandler;
