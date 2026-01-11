interface AuthRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const AuthRequiredModal = ({
  isOpen,
  onClose,
  message = 'Musisz się zalogować, aby wykonać tę akcję.',
}: AuthRequiredModalProps) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">🔒 Wymagane logowanie</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Zamknij
          </button>
          <a href="/login" className="btn btn-primary">
            Zaloguj się
          </a>
        </div>
      </div>
      <div className="modal-backdrop bg-black/50" onClick={onClose}></div>
    </dialog>
  );
};

export default AuthRequiredModal;
