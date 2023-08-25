import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

export function PageRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index element={<>Teste</>} />
        <Route path="schedule" element={<>Teste1</>} />
        <Route path="schedule-list" element={<>Teste2</>} />
        <Route path="*" element={<>Teste3</>} />
      </Route>
    </Routes>
  );
}
