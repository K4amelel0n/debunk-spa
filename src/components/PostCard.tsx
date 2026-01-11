import { useState } from 'react';
import type { Post } from '@api/posts';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [mojaOcena, setMojaOcena] = useState<boolean | null>(
    post.mojaOcena ?? null
  );
  const [ocenyPozytywne, setOcenyPozytywne] = useState(post.ocenyPozytywne);
  const [ocenyNegatywne, setOcenyNegatywne] = useState(post.ocenyNegatywne);
  const [pokazKomentarze, setPokazKomentarze] = useState(false);

  const sformatowanaData = new Date(post.dataUtworzenia).toLocaleDateString(
    'pl-PL',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const handleOcena = (ocena: boolean) => {
    if (mojaOcena === ocena) {
      setMojaOcena(null);
      if (ocena) setOcenyPozytywne(ocenyPozytywne - 1);
      else setOcenyNegatywne(ocenyNegatywne - 1);
    } else {
      if (mojaOcena === true) setOcenyPozytywne(ocenyPozytywne - 1);
      if (mojaOcena === false) setOcenyNegatywne(ocenyNegatywne - 1);
      setMojaOcena(ocena);
      if (ocena) setOcenyPozytywne(ocenyPozytywne + 1);
      else setOcenyNegatywne(ocenyNegatywne + 1);
    }
  };

  const getInitial = (name?: string | null, email?: string) => {
    return (name?.[0] || email?.[0] || '?').toUpperCase();
  };

  return (
    <article className="card bg-base-100 shadow-md">
      {post.imageUrl && (
        <figure>
          <img
            src={post.imageUrl}
            alt={post.tytul}
            className="w-full h-64 object-cover"
          />
        </figure>
      )}

      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-10">
                <span>{getInitial(post.autor.name, post.autor.email)}</span>
              </div>
            </div>
            <div>
              <p className="font-medium">
                {post.autor.name || post.autor.email}
              </p>
              <p className="text-xs opacity-60">{sformatowanaData}</p>
            </div>
          </div>

          {post.kategoria && (
            <span className="badge badge-outline">{post.kategoria.nazwa}</span>
          )}
        </div>

        <h2 className="card-title text-xl mt-2">{post.tytul}</h2>

        <div className="bg-error/10 border-l-4 border-error p-3 rounded-r-lg mt-2">
          <p className="font-semibold text-sm text-error mb-1">
            ❌ Fałszywa informacja:
          </p>
          <p className="text-sm">{post.trescFakeNewsa}</p>
        </div>

        <div className="bg-success/10 border-l-4 border-success p-3 rounded-r-lg mt-2">
          <p className="font-semibold text-sm text-success mb-1">
            ✅ Wyjaśnienie:
          </p>
          <p className="text-sm">{post.wyjasnienie}</p>
        </div>

        {post.zrodla.length > 0 && (
          <div className="mt-3">
            <p className="font-semibold text-sm mb-2">📚 Źródła:</p>
            <ul className="list-disc list-inside space-y-1">
              {post.zrodla.map((zrodlo) => (
                <li key={zrodlo.id}>
                  <a
                    href={zrodlo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary text-sm"
                  >
                    {zrodlo.title || zrodlo.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="card-actions justify-between mt-4 pt-4 border-t border-base-300">
          <div className="flex gap-2">
            <button
              onClick={() => handleOcena(true)}
              className={`btn btn-sm ${mojaOcena === true ? 'btn-success' : 'btn-ghost'}`}
              title="Potwierdza analizę"
            >
              👍 Pozytywna ({ocenyPozytywne})
            </button>
            <button
              onClick={() => handleOcena(false)}
              className={`btn btn-sm ${mojaOcena === false ? 'btn-error' : 'btn-ghost'}`}
              title="Kwestionuje analizę"
            >
              👎 Negatywna ({ocenyNegatywne})
            </button>
          </div>

          <button
            onClick={() => setPokazKomentarze(!pokazKomentarze)}
            className="btn btn-sm btn-ghost"
          >
            💬 Komentarze ({post.komentarze.length})
          </button>
        </div>

        {pokazKomentarze && (
          <div className="mt-4 pt-4 border-t border-base-300">
            {post.komentarze.length === 0 ? (
              <p className="text-sm opacity-60">Brak komentarzy</p>
            ) : (
              <div className="flex flex-col gap-3">
                {post.komentarze.map((komentarz) => (
                  <div key={komentarz.id} className="flex gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8">
                        <span className="text-xs">
                          {getInitial(
                            komentarz.user.name,
                            komentarz.user.email
                          )}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {komentarz.user.name || komentarz.user.email}
                      </p>
                      <p className="text-sm">{komentarz.tresc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Dodaj komentarz..."
                className="input input-bordered input-sm flex-1"
              />
              <button className="btn btn-sm btn-primary">Wyślij</button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
