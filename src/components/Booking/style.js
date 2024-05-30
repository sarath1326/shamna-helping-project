import styledComponents from "styled-components";

export const Wrapper = styledComponents.div`

.modalContainer {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #29404a;
    border: 2px solid black; 
}

.modal {
    height: 550px;
    width: 800px;
    background: #c8d5db;
    border: solid;
    border-color: #47334a;
    border-radius: 10px;
    margin-top: 55px;
    margin-left: 250px;
    padding: 5px;
    position: relative;  
}

.btn {
    position: absolute;
    right: 0;
}

.movieDetails {
    display: flex;
    padding-top: 10px;
}

.details {
    margin-top: 50px;  
    margin-left: 20px;
    font-size: 40px;
}

.movie {
    font-size: 60px;
    font-weight: bold;
}

.drctr {
    padding-top: 20px;
    font-size: 40px;
}

.lang {
    font-size: 30px;
    padding-top: 35px;
}

.slots {
    padding-top: 40px;
    font-size: 25px;
    font-weight: 900;
    border-radius: 12px;
}

.description {
    font-size: 25px;
    font-weight: bold;
    padding-top: 20px;
    padding-left: 250px;
}

.desc {
    padding-top: 10px;
    font-weight: bold;
    font-style: italic;
}

.image {
    height: 400px;
    width: 350px;
    border-radius: 50px;
}   
`;





// const filterData = [list of items]; //state
// const modalData = {
//     id: 1,
//     slot: 99,
// } // state;

// //Modal Component on clicking book slot button
// onclick = () => props.parentFunctionForBookingSlot()

// //Home parent Page
// const parentFunctionForBookingSlot = () => {
//     modalData.slot = modalData.slot - 1;
//     const index = filterData.findIndex(item=>item.id === modalData.id)
//     filterData[index].slot = modalData.slot;
//     setFilterData(filterData);
//     setModalData(modalData);
// }

// <Modal 
//   mod