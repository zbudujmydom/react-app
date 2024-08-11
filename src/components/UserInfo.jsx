// export const UserInfo = (props) => {
//   if (!props.user?.name) {
//     return <button>Zaloguj</button>;
//   }

//   return (
//     <div>
//       <p>Witaj {props.user.name}</p>
//     </div>
//   );
// };

export const UserInfo = (props) => {
  return <div>{props.user?.name ? <p>Witaj {props.user.name}</p> : <button>Zaloguj</button>}</div>;
};
