import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminCategory = () => {
  // const {token} =useSelector( (state) => state.login)
  
  const dispatch = useDispatch();
  const name = useRef();
  const despcri = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const catData = {
      name: name.current.value,
      description: despcri.current.value,
      token: token
    };
    dispatch(addCategory(catData));
  };

  return (
    <>
      {/* <!-- ========== tab components start ========== --> */}
      <section className="tab-components">
        <div className="container-fluid">
          {/* <!-- ========== title-wrapper start ========== --> */}
          <div className="title-wrapper pt-30">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="title">
                  <h2>Add Category</h2>
                </div>
              </div>
              {/* <!-- end col --> */}
              <div className="col-md-6">
                <div className="breadcrumb-wrapper">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#0">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#0">Forms</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Form Elements
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- ========== title-wrapper end ========== --> */}
          {/* <!-- ========== form-elements-wrapper start ========== --> */}
          <div className="form-elements-wrapper">
            <div className="row">
              <div className="col-lg-6">
                {/* <!-- input style start --> */}
                <div className="card-style mb-30">
                  <form action="" onSubmit={submitHandler}>
                    <h6 className="mb-25">Input Fields</h6>
                    <div className="input-style-1">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        useRef={name}
                      />
                    </div>

                    <div className="input-style-1">
                      <input type="Submit" className="btn btn-success " />
                    </div>
                  </form>
                  {/* <!-- end input --> */}
                </div>
                {/* <!-- end card --> */}
                {/* <!-- ======= input style end ======= --> */}
              </div>
              {/* <!-- end col --> */}
              <div className="col-lg-6">
                {/* <!-- ======= textarea style start ======= --> */}
                <div className="card-style mb-30">
                  <h6 className="mb-25">Add Description</h6>
                  <div className="input-style-1">
                    <label>Description</label>
                    <textarea
                      placeholder="Message"
                      rows="5"
                      ref={despcri}
                    ></textarea>
                  </div>
                </div>
                {/* <!-- ======= textarea style end ======= --> */}
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* Table   */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card-style mb-30">
                <h6 className="mb-10">Data Table</h6>
                <p className="text-sm mb-20">
                  For basic styling—light padding and only horizontal
                  dividers—use the class table.
                </p>
                <div className="table-wrapper table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <h6>#</h6>
                        </th>
                        <th>
                          <h6>Name</h6>
                        </th>

                        <th colSpan={2}>
                          <h6>Action</h6>
                        </th>
                      </tr>
                      {/* <!-- end table row--> */}
                    </thead>
                    <tbody>
                      <tr>
                        <td className="min-width">
                          <p>1</p>
                        </td>
                        <td className="min-width">
                          <p>
                            <a href="#0">ABC</a>
                          </p>
                        </td>

                        <td className="min-width">
                          <span className="status-btn active-btn">Active</span>
                        </td>

                        <td className="min-width">
                          <div className="action">
                            <button className="text-danger">
                              {/* <i className="lni lni-trash-can"></i> */}
                              <span className="status-btn active-btn">
                                Delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* <!-- end table row --> */}
                    </tbody>
                  </table>
                  {/* <!-- end table --> */}
                </div>
              </div>
            </div>
          </div>
          {/* End Table  */}
          {/* <!-- ========== form-elements-wrapper end ========== --> */}
        </div>

        {/* <!-- end container --> */}
      </section>
    </>
  );
};

export default AdminCategory;
