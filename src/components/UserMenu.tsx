import { Form } from 'react-router';

const UserMenu = () => {
  return (
    <div className="dropdown dropdown-center">
      <div tabIndex={0} role="button" className="avatar avatar-placeholder">
        <div className="bg-neutral text-neutral-content w-12 rounded-full">
          <span className="text-xs">UI</span>
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <Form method="post" action="/logout">
          <li className="bg-error rounded-md w-full">
            <button type="submit" className="text-error-content w-full">
              Wyloguj
            </button>
          </li>
        </Form>
      </ul>
    </div>
  );
};
export default UserMenu;
