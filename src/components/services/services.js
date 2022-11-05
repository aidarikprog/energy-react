import { Routes, Route } from "react-router-dom";

import Create from "./create/create";
import Manage from "./manage/manage";
import Chat from "./chat/chat";
import Delegate from "./delegate/delegate";
import Automate from "./automate/automate";
import MainService from "./mainService";

export default function Services() {
      return (
            <Routes>
                  <Route path="/" element={<MainService />}>
                        <Route index element={<Create />} />
                        <Route path="manage" element={<Manage />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="delegate" element={<Delegate />} />
                        <Route path="automate" element={<Automate />} />
                  </Route>
            </Routes>
      );
}
