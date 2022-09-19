import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";

function ProfileModal({ modalOpened, setModalOpened }) {
   const theme = useMantineTheme();

   return (
      <Modal
         overlayColor={
            theme.colorScheme === "dark"
               ? theme.colors.dark[9]
               : theme.colors.gray[2]
         }
         overlayOpacity={0.55}
         overlayBlur={3}
         size="55%"
         opened={modalOpened}
         onClose={() => setModalOpened(false)}>
         <form action="" className="UserInfosForm">
            <h2>Your Info</h2>

            <div>
               <input
                  type="text"
                  className="UserInfoInput"
                  name="firstname"
                  placeholder="First Name"
               />
               <input
                  type="text"
                  className="UserInfoInput"
                  name="lastname"
                  placeholder="Last Name"
               />
            </div>
            <div>
               <input
                  type="text"
                  className="UserInfoInput"
                  name="worksat"
                  placeholder="Works at"
               />
            </div>
            <div>
               <input
                  type="text"
                  className="UserInfoInput"
                  name="livesin"
                  placeholder="Lives in"
               />
               <input
                  type="text"
                  className="UserInfoInput"
                  name="country"
                  placeholder="country"
               />
            </div>

            <div>
               <input
                  type="text"
                  className="UserInfoInput"
                  name="relationship"
                  placeholder="Relationship Status"
               />
            </div>

            <div>Profile Image 
               <input type="file" className="UserInfoInput" name="profileimg" />
               Cover Image
               <input type="file" className="UserInfoInput" name="coverimg" />
            </div>

            <button className="Button Btn--UserInfo">Update</button>
         </form>
      </Modal>
   );
}

export default ProfileModal;
