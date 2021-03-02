import React from "react";
import './Address.scss';

interface AddressItem {
	address: string;
	country: string;
}

const Address: React.FC<AddressItem> = ({address, country}) => {
    return (
		<div className="contact">
			<div className="info">
				<span className="country">{country}</span>
				<span className="address">{address}</span>
			</div>
			<div className="map">
				hello
			</div>
		</div>
    );
};

export default Address;
