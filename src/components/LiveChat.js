import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate } from "../utils/generateName";
import { generateMessage } from "./../utils/generateMessage";
import { generateProfileImage } from "./../utils/generateProfileImages";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("abc");
      dispatch(
        addMessage({
          name: generate(),
          message: generateMessage(),
          profile: generateProfileImage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="h-[650px] bg-neutral-950">
      <div className="w-full border  border-stone-700 rounded-t-lg">
        <h1 className="font-bold border-b-2 border-stone-700 p-2">Live Chat</h1>
        <div className="space-y-2 overflow-y-scroll p-2 flex flex-col-reverse h-[520px]">
          {chatMessages.map((c, i) => (
            <ChatMessage
              key={i}
              name={c.name}
              message={c.message}
              profile={c.profile}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-1 border border-stone-700s rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kiran Kumar",
              message: liveMessage,
              profile: "https://yt3.googleusercontent.com/ytc/AGIKgqMLIlKqZvDpaOhchoq8PQD6uEifK-L3y_tRaoCXbA=s900-c-k-c0x00ffffff-no-rj"
                // "https://yt3.ggpht.com/ytc/AGIKgqMvrx-VsRxtYBr-OdVCl4HjNPvscRJpvkEQCQ84UA=s88-c-k-c0x00ffffff-no-rj-mo",
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[76%] border border-black bg-neutral-800 rounded-lg py-1 px-2 "
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          placeholder="Write your comment here"
        />
        <button
          type="submit"
          className="px-4 mx-2 bg-green-200 justify-center rounded-3xl py-1 dark:bg-green-900"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
