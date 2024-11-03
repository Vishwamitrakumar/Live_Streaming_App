import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
     const { roomId } = useParams();
     let myMeeting = async (element) => {
          const appID = 704622990;
          const serverSecret = "da29c42679816ae93c28aae7e406a936";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Vishwamitra Singh");
          const zp = ZegoUIKitPrebuilt.create(kitToken);
          zp.joinRoom({
               container: element,
               sharedLinks: [
                    {
                         name: "Copy link",
                         url: `http://localhost3000/room/${roomId}`,

                    },
               ],

               scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
               },
               showRoomTimer: true,
               showUserName: true,

          });
     }


     return (
          <div className='room-page'>
               <div ref={myMeeting} />
          </div>
     )
}

export default RoomPage
