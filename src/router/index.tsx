import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Main from "../pages/Main";
import Wiki from "../pages/Wiki";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading..</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/wiki/:id" element={<Wiki />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
