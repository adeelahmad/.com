/** @jsx jsx */

import React from 'react'; //eslint-disable-line
import { jsx, Box } from 'theme-ui';
import moment from 'moment';
import Link from './link';

import { useAuth } from '../../hooks/use-auth';

export default function GuestList() {
  const { guestbookLog } = useAuth();

  const guests = guestbookLog();

  class Signature extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    componentDidMount() {
      guests.then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;
      const itemList = data.map(function (item) {
        const lastSigned = JSON.stringify(item.updatedAt);
        let signedDate = moment(item.updatedAt).format(
          'MM/DD/YYYY [at] h:mm:ss a'
        );
        console.log(signedDate);
        return (
          <Box
            key={item.ethAddress}
            sx={{
              borderBottom: '1px solid',
              borderColor: 'inherit',
              mb: '2rem',
            }}
          >
            <p sx={{ m: 0, p: '0 0 1rem' }}>{signedDate}</p>
            <h4 sx={{ m: 0, p: '0 0 2rem' }}>
              <Link
                href={'https://etherscan.io/address/' + item.ethAddress}
                sx={{ fontWeight: 'normal', textDecoration: 'none' }}
              >
                {item.ethAddress}
              </Link>
            </h4>
          </Box>
        );
      });
      return <Box>{itemList}</Box>;
    }
  }
  return <Signature />;
}
