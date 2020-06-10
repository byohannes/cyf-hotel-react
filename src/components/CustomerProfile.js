import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/${customerId}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [customerId]);
  const vip = customerProfile.vip ? "a VIP" : "not a VIP";
  if (!customerId) {
    return null;
  } else {
    return (
      <div>
        {" "}
        This Customer whose Id is {customerId} and he/she is {vip} and his/her
        phone number and email are {customerProfile.phoneNumber} and{" "}
        {customerProfile.email} respectively.
      </div>
    );
  }
};
export default CustomerProfile;
