import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  price: {
    
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });console.log(this.state.open);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>View Suggestion</Button>
        
        
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Hiking Boots
            </Typography>
            <img height="150" width="150" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFhUVGBcVFhUVFRgWFRUVFxcWFxYYFRUdHSggGRolHxUYJTEhJSktLi4uGB8zODMtNyktLisBCgoKDg0OGhAQGC0lHR0tLS0rKystLS0rLSstLTctLS0tLS0tKy0tKy0tNTAtListLS0tKy0tLS0tLTUrLS0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA+EAACAQIEAwUFBwMDAwUAAAABAgADEQQSITEFQVEGEyJhcQcygZGhFEJScrHB8ILR4SNikhYzQxVzorLx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAgEQEBAQACAwEBAAMAAAAAAAAAAQIRMQMSIVFBEzJh/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBLOMxdOkhqVXVEXUs5CqPUmRPa/tJTwFA1XGZictOnexd7E2vyAAuTyAnCuPdocRjKneV3LWJKJslMdEUc/8AcbnznN1w7zi6dQ477UsPT8OFpNXb8Z/06I/qPib4C3nNPxftM4qx0fD0h0p0mcj+t3sf+M0s1T13hsNWO1J+Z1GUab6tYcx85x7W9NPTM7T9bt3xMm/26qPJUpAf/QzcPZ/7R3qVRh8ZUBzkClVKqpzHQJUtYa8jYa6HcTly8KrncIPWrT/ZjLtPgeIBvddOhc7dCEnU9nN9H1FEhOxfEqmIwdGpVBFTLlqZgQS6EoxseRy3+Mm52yIiICIiAiIgIiICIiAiIgIiICIiAiIgIluvXRFLuwVVFyzGwAHMmcx7S+04klMELKNDVdblv/bW+g8yPhJbwsnLfeOdocNhBerUAa1wgsXb0H7mwmqU/axggwFWjiKQJtnZAy//AAYn5Cc2xy1bd/WYMajHMSwNS9rjOu4uBpy0+EwqrDLobhhqp2t/Oc59nfpEn7TOP/a8cwRw1GkqLTym6nMiuzDzJa39IkPwnhjVdWJVPxC1/MKNdgCb2IFtd5rq3FYIPvHKPM3svqTf6zo+HohVWmOWg057MetzZtRrvvYqr15p78Z+LGGw6UgCqW2LAkMx8Oc+I3Db0xbT3jpqZj8SxQpDxtYcrZ1uQfHci494mSDVBfPfRrEm9r3JqNrYqdEUagGavxd6a1qRqUyUX3lFlL+EtuDbep1E7ZdrFXjjkE93vf32FtegK3lzC8eYG5QAb+ABuVtdVkc+V6jd0jWJPdpbM4XkCBe5k/h+z9J6BXvaQxWbOFDqSAAQKbWO5vc9DbpM/J5c+Ptp4/FrfTsPsw4otfDNlYMEbkCLZhexB53Bm4ziHsb4iFxvcLTKM9F1rkn33pMDTNuRAaoD6+U7fNHBERAREQEREBERAREQEREBERAREQERLeIqhEZjsoLH4C8Dj/tZ7RvWr/Y6bEUaVu9t9+qdQp8l0+J8poyfpyl7GVC9R6jHV3dyT1dix/WWgw85lby3zOIze0WKGJp0lPhNLNZQty2bq4Hnseg3mAaeVVXooEksZw2pTwpxR0W6geEkHNbQsPdNjfUWPW+hjFrioiuPQ+REt5ScfxB8XYJXV7XCsjW62IP7Tf8ABYgPZgbhluNun+LcttxbKOedpBqD5SQ7DcVtVSg+xLZPI5WuNjuPL6aTudMtdt2rr7w5+LLqbgWSkCSBce8feB9ZB9ocL3id4vLN4QFJ1cKPd12S+3KTGLrKrLcgE2Hoq56nh1va+X3SRMCpjKYuCQbAWzFTbKg5MAfeY/KVyh+AV6OR1quqgsL5qjpmW21l94XGt+RmWDw4Af8Aa0I1szWt/uABueu4mv4ymFqHIVZTa1m20FwbnTW9tTKbJlJLLmvYISTfzuBb4Xk4+uvb43nsHiVXi6VFcMrX1FxfvAEOlupn0EJ8q8E4v9nYuGHeXUjfL4dQCNNvXnO6ey7tTieIUa1TEd1dKgVRTFvAUVrsMzcyRfyMqN2iIgIiICIiAiIgIiICIiAiIgIiICQ3bDF91gsQ/Pu2UerDKP1kzNK9rdcrgdOdRR9GI+oHyirHDsdjQrWtcj5D+5l+jcgXFiRqOkwcLQzPc7D6mSV5nriNc836ysZizUo9y5uoIK2uCCLa9DsOm0j6dNaa2Y2AufUn+bS+KTG9rX6na/p0mMOFsxu7F21soFh6Wk5i+t/kRnFXSoANR5m1/l/eYC0EoFWJdWIupIy28101krjeFtQYd86hwwTuwSSCRmDBrZWFiLkE2uJXxVkxFMFz4kNmIvoTYG25sbLysNek0n4xv6w3o1n1IqG5tcp7x/MfePzO8oTA1T/4nsN84y/7tmI5fT11ncR2hpqqmxL6abC+UrvbXfaxHptIfF8Vqve3gB6ErfQLrbyHTmZUY9fB1BuqjNY8ri/5dJ7w3gtXEDNTtlGhOY3uLch63lpEdtVzOeoJAHP3iZM9n3q0KhV1ISotrHQXXpyva+45DnoQpw2Ew9FzTqjxc8+a3+0ggWsfXpO6eyngFHD4dq1Mlmrm5veyqlwEBOpFyxud83lOLcYwDYqqpQoCFIbNdRoRlt8zN69jfE6+FxDYDEXVaytUojNmTOur5Dfmutuq7a6h2eIiAiIgIiICIiAiIgIiICIiAiIgJzz204kDDUKfN617eSo37svznQ5y72xrerhRyVazfWn/AGkqxzNEyj+amXcPRLGw/nlKDqf5uZJrakg5sTYD6/IbkzJv0xb8ulx8QbES9w9wHBJA3sTqAeRImMTv1JJJ6km5PzMEgC5NgNSZxO3d+xH9pqWao9QlMgsECi23w94kX+NuUiKVGo/upUYAZiKaF2I6mwNhfmZJ0KJxLZ2uKY90fimwcT4gcPgwKRCOXA8BK1lzKVLZlIOUryNxdR0m0rDWfxo1JDnCkZL87eLe1teeh+U23B8Jw6gM4BO+ZjcAX530tewJOlg9iNJqzlwQluh/FqduepN/rPM7O2VRqNy3UabcrbaCds63VcfQQXUoByYWsNbg2HivsdLjM3QTX+OcYouVygnKb3toTYiwOl115jr1mPS4WXAuc3q2VdwP1I5j3gDbW2WeA0hrUKgcwoOml7sTra3W18w5nwkRFPjFW/hOX+php5m+2m0m+D9sMRTqUnbu6vdOtRQTlYEdGtpcEg+svUqWDTxd2ltPGwve/TkbDoRuOQAlnGcQ4ewsaJ/MgAO/LX94V9G9l+PUsdh0xFIEBrgq3vI6mzKfiN+YsZLThfsj7TYPC4h6PfMtCuFINfKoSspCgZhpZg1tfwDrO5gwPYiICIiAiIgIiICIiAiIgIiICct9rFS9ZRceGnbzFySb/ITqU457ScQDxCpSsARTpsD+K4N7+Yt8pNdOs9tMwhs4J2Fz+0u1CSxYm/IeS8h/eWqY1HxH7j9JcaYWvRmTtTaV5VIKsLg6EGUSoGcu1a2AAAsBymRUrkqE0t+UXPqZjCeiEsi5wLhtJa5qVAXZiCouVtqL5XXVW2s3KatxDibV6j13LOWa+Y6kDYbDoAPObfhcSaZzDMCNipAYG99CdJCcS4ez5VpqqgtdrWAHIWAGvwmudfGOsfUN/wCouFvmKrrYm+ZuRIHxIv5mUrUquLKCRf3nY2G50HopNgCdNpumOGHwWBtSAarXIpv3+Hzajxd5QqECwyg6a6kHzOmDiGU2VTroOVz4dddPujy0E0Yr1LhDPoWYnqo23va/5W5cjMun2Sc6qTrtnsfrp1ExKXEKwuQlspXMGIG+wsTqLJ62I11mZR7TVV1Z0vbldm0BtrzbU6m+pMotYjsxiqQzd2HAF7pvbzHSdv8AZD2upYzCrhyzGvh0VXzm5dNlcNz0sDz2vuCeIYjtTiwLHvFB0F0CfJssp4H2kxGHqjE0qiLVAKeJR7h31531+Q32gfV8SI7J8aXGYSliBlu6jOqsGCuNGW42IPKS8BERAREQEREBERAREQEREBPnr2l4p24niG/A6BT5JTp/vefQs4N7UKitijlIPjq39QQNTz90yW3mLIgkcN4h97xDyPT4G4lwyPwNWxyddV9eY+WvwkgevI/QzHc+t/Hp5aBPZUBOGoJUJ5PRArvLnL+bc5aAlxDCLnamrhcS96VNlRQvvO+jhbMbHmdiddFvoZqGEwNTFVrUUZrbZReyj9Sem82iqgMrwdF6CrVooAEqIBlcoVaxYWAYA7bsCLAzXGuax3njKE41wHDU6iKuM726qzjumpd0SRcMCTyzGxsRbWUMcMmUBkCWBJUENmyi4J33uL3JIttlF43jrVGqPVqtmqVXZiQbg3J12BsBa3kBM3st2YxONJSklIsBfNVYIN+tixOnIdZpyysSCcVwJANixGykZvIeHMANvPfykfxytg3ysiZG++mUa7W8QNhz018+d8V+GVMzh3poELKyqy+8tgQMuh38+fQyyjYZbd4M/wCvpc6fL+96jY+xnbg8Par9nogiowY3qVDZRsqr7p/MdfOwE+kOHYsVqVOqBYVFVwDuMwB/efJVamjXalTrouxUEMAfK4uNps/Z3tzjcBTNJDUIcqy9+WbINrUluFUHpaReH0tEhex3GjjcJSxBXKXGo5XBtceR3k1KhERAREQEREBERAREQMTiuOWhReq2yKTbr0HxM+dOP4pq2Iq1WABdi+VdgWte0677Wsc1PDUkX/y1lVvyhWJ+uWchxmAZjdSBy12gRlQG2mhGoPQjUSVoVAwB5MAfnuP1Exa3DqoGlj6SvCVAEVGuGF9+RJJnO3eKy1XW38tLhEppm4tzGxle/wC8w1HozVEqAjLEjp7KhKRKoHsMgbcT0T0SDAfgqmoahu21l3A6W669ZlccrvQpGn3qVmsO5FPR8MWIDhioBI8R3NiRsJm4Z4qUV1GpBZnsfxsbs3qTzned8M9ePmtIwfA8TWYKNF/EenRRzPyGs3Lh/ZhaQFmJPM8zy3+enmZnYMBdpJ0XvHvaekiNTg6DfX1njcNUbW/n/wCyaltlkXlsnZTtOKSLQrLZV0VwNhyDD95vNGqrAMpDA7EG4PxnIlEl+FcQq0dVaw5g+6fUTXOmWsf2OkxNUTt5hFFqrWb/AGAuPoJfw3bnhzm3fZfzo6j5kWmjJskS3Qro6hkYMp2KkEH4iXICIiAiIgIiIHPvbDVVaFLS9TOch5AZfESPlOZUKwYBr687735zfPbZXI+zL17w/AZL/qJzfh+IAYr+Lb1t+4gSPfjz+R/tLX2mk+mZT5SszXmTKbdD+kqJt8GRrTOnQ/sYStY+IWI94dR+KUcPxWYdGG45etpmZQ2+/I/z9JzcSu87sesstkSqn4ND7vLy8vSXHXSeayyvVnU1PizPUnjCVKZFVCewJ7aAWVd5KbSkiFZFOvaZ1DEyHlXfZdSbSo2JcTK+9HWanU4qRt8zMSrxOoQTqRcAnZbkEgfQ/KdzNvbLW8zpuOI4jSp87n6D1MgMdxpn2On82E12tjGO5+HIfCWGrmbTMjDWrUw+M85j1Mf5yJesYRGbYfHYTpy2js92txGEqB6TafeQ+445gjl6jUTvvZ/jFPF4dMRT2cag7qw0ZT5gz5dVQN2H6zqfsW45TR6mEZ/+6Q9IEWBdVOcDXcqqn+kyK7BERAREQEREDn/tp4W1XA96i3ai2YkbimwKv8AcpP5Zw8Hxut+SsPK2mk+ra1IMCp2M5h2k9lCVKpr4d8ja+HdT5Wtp8DA5MuNqbZmuPP6zFxlRtGv94X8995M8f7M4vDt46L6feVWYfpIRgxTxAg2uQQQdPIwMkVypDr8fMeckcPxcfeXTqNfpvIChWHuk+kpfEFNDt+ko3WjXVhcEMP5vK+6I1Q3H4T+01XAYs+8jD4foyycwePDae63S+h81P7SWS9rNXN+MrOD5HoZQZdWqri+/nPDQHJiPrMb4vxtPNP68V5cDy0cO3Ig/SHpMBtfyE4uL+O5vP6yMwlqrWRfeNvqfkNZGYqrW18LADoL/AFEjXxP85zvPi/XGvL+JbFcR/DoOp3P9pG1MQT5+ZmMao6yk1BNZmTpjdW9smkjVGCrqTc6mwAG7Mdgo5n/E2SjxXh1Kj9nKPWBN3cIAC/4lzEHTYEcpqn2psmS/hJuQLC5G2Y7kDkDoJaLiZ+Txf5P9r8n40x5PTqff+sjHLTDt3TFk3UkEGx1swP3hsfSYzGBrsL+k9Ua6iaycThlbzXuS2p9fSU1KpO506T2qxMoWBUnkJKcIxb0aqVl0NNlcWv8AdN/2kfTQ9flMuim1wTfT6GB9T03BAI2IB+cqljAqRTQHcKoPqAJfgIiICIiAiIgeMoO4vIPjfZHA4sf61EE9R4WHoRJ2IHOa/sd4Zuqv/VUdh8s0w6vstw6DwUqf/H/M6lEDiGO9naj8Q/LYTXONcA+zJnLMVU/etpoec+jamGVtxILjHZunUU2UHyI0PwkHzwmJKslrjNq9tbL5/GS/2gWuHUj9fl/aSHGuw9SlVqVS5PJKajUC99Sf2mrN4BdrXG8vIkxxEcwQOuhmV9oPn8QZriVcyE6a3tbpMjD8RYKNQdN9byomTjPMfOWamKTmV+kj14mzchbrraYdXEa6neBM99TP4fpKC1Pov0kQxI1BsRqP7ekvLxNiNx8v8xyM8sn4R/x/xLVXEIv3fpaR78RYnKG1P6dZTUqEnWORkVMafuqB57/SYpJ5y0cSgOW+sub7QpLtJJPdluzX2lyKjGmltGK38X3bKbXHWblwj2OgtmfGgoQCe6p5WvztnLAD1Bk5XhzsIqjMxAA3J0Am19iOymIxdam5pslBSGLstswGvhvvfbTreda4P2J4fhiGp0FZxs9T/Ucehb3fhabCBCPYiICIiAiIgIiICIiAiIgIiIFjEYSnUFnUH1E55x/2R4esSaNVkBNyjar6X3tOlRA4Fxr2Y4+iuWigqKBYFP3Wa1W7EYxAQadUdbqR6z6ilLoDuAfUQPlqrwqugsaZUcr2EwDwurfMW53sP0n1Hiuz+Fqe9SX4aSKr9hME33bfIwPnbuGOloocHqD4zvdX2e0fu5fiv+Zh1fZ50K/DSRY4mnCXU33Mvpwtj1nW6ns/cba+hEs/9FMu6P8ASBzKjwIXvlF+tpLYPhhWbz/0sR9xvlK07OPyU/KBA4CmVM2zh2PKgamWqXZ6r0khR7P1IErgOMHYm8nKVQMLiQOD4Gy7mTlCllFoRdiIlCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJ5aexAWiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf//Z" />
            <Typography>Price: $213</Typography>
            <img height="150" width="150" src="https://ae01.alicdn.com/kf/HTB1eQV2njihSKJjy0Feq6zJtpXaC/RAX-2018-Waterproof-Hiking-Boots-For-Men-Outdoor-Mens-Hiking-Shoes-Mountain-Shoes-Women-Climbing-Boots.jpg_640x640.jpg" />
            <Typography>Price: $300</Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
            Description should change.
            </Typography>
            <Button onClick={this.handleClose}>Close Modal</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
