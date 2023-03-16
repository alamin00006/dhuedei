import React from 'react';
import PriceTable from '../PriceTable/PriceTable';

const Order = () => {

  const handleOrderSubmit = (event) => {
    event.preventDefault();

    
        
        const orderAdd = {

            name: event.target.name.value,
            mobileNumber: event.target.mobileNumber.value,
            date: event.target.date.value,
            fullAddress: event.target.fullAddress.value,
            orderNote: event.target.orderNote.value,
            
      };
          console.log(orderAdd);
          const formData = new FormData();
          formData.append("name", orderAdd.name);
          formData.append("mobileNumber", orderAdd.mobileNumber);
          formData.append("date", orderAdd.date);
          formData.append("fullAddress", orderAdd.fullAddress);
          formData.append("orderNote", orderAdd.orderNote);
};
  return (
    <div>
       <div id="order">
       <h1 className="text-5xl text-center text-orange-400 my-5 mx-auto shadow-2xl border border-spacing-1 border-cyan-200 p-5 rounded-md  mb-10">Send Order</h1>
         
              <form
                className="flex flex-col lg:w-1/2 mx-auto shadow-2xl border border-spacing-1 border-cyan-200 p-5 rounded-md  mb-10"
                onSubmit={handleOrderSubmit}
            >
                <input
                    type="text"
                    className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    type="text"
                    className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
                    name="mobileNumber"
                    placeholder="Your Mobile Number"
                />
                <input
                    className="input w-full px-5 my-5  text-black"
                    type="date"
                    name="date"
                    placeholder="Select Date"
                    required
                />
                <input
                    type="text"
                    className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
                    name="fullAddress"
                    placeholder="Your Full Address"
                />
                <textarea
                    type="text"
                    className="input w-full p-5 h-32 shadow-md border-none  my-5 text-black"
                    name="orderNote"
                    placeholder="Write your Order Note(optional)..."
                />

                <input
                    className="btn btn-accent my-5 w-20 mx-auto px-5"
                    type="submit"
                />
            </form>
           
        </div>
        <div>
        <div className="w-4/5 m-0 mx-auto">
      <div className="divider before:bg-cyan-500 after:bg-cyan-500 mt-8 font-bold text-xl text-cyan-600">
        Price Table
      </div>
      <div className="flex justify-center">
        {/* <div>
          <img className="w-full" src={pricListImg} alt="" />
        </div> */}
      </div>
      <PriceTable></PriceTable>
    </div>
        </div>
    </div>
  );
};

export default Order;