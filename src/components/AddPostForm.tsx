import { useEffect, useRef, useState } from 'react';
import { useFetcher } from 'react-router';
import { KATEGORIE } from '@api/posts';

const AddPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const generalError = fetcher.data?.generalError;
  const status = fetcher.data?.status;
  const isFetching = fetcher.state === 'submitting';

  const [zrodla, setZrodla] = useState<string[]>(['']);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (fetcher.state === 'idle' && status === 400 && formRef.current) {
      const tytulInput = formRef.current.querySelector(
        'input[name="tytul"]'
      ) as HTMLInputElement;
      if (tytulInput) tytulInput.focus();
    }
  }, [fetcher.state, status]);

  const handleDodajZrodlo = () => {
    setZrodla([...zrodla, '']);
  };

  const handleUsunZrodlo = (index: number) => {
    setZrodla(zrodla.filter((_, i) => i !== index));
  };

  const handleZmienZrodlo = (index: number, value: string) => {
    const noweZrodla = [...zrodla];
    noweZrodla[index] = value;
    setZrodla(noweZrodla);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleUsunObrazek = () => {
    setImagePreview(null);
    const input = formRef.current?.querySelector(
      'input[name="image"]'
    ) as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <fetcher.Form method="post" className="flex flex-col gap-4" ref={formRef}>
      {generalError && (
        <div role="alert" className="alert alert-error">
          <span>❌ {generalError}</span>
        </div>
      )}

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">📝 Tytuł analizy</label>
        <input
          name="tytul"
          type="text"
          className="input input-bordered w-full"
          placeholder="np. Fałszywy cytat polityka X na Twitterze"
          required
        />
      </fieldset>

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">🏷️ Kategoria</label>
        <select name="kategoriaId" className="select select-bordered w-full">
          <option value="">Wybierz kategorię...</option>
          {KATEGORIE.map((kategoria) => (
            <option key={kategoria.id} value={kategoria.id}>
              {kategoria.nazwa}
            </option>
          ))}
        </select>
        <p className="text-xs opacity-60 mt-1">
          Wybierz kategorię tematyczną dla tej analizy
        </p>
      </fieldset>

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">📷 Zdjęcie/Screenshot</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full"
          onChange={handleImageChange}
        />
        <p className="text-xs opacity-60 mt-1">
          Dodaj zrzut ekranu lub zdjęcie fake newsa (opcjonalne)
        </p>

        {imagePreview && (
          <div className="mt-2 relative inline-block">
            <img
              src={imagePreview}
              alt="Podgląd"
              className="max-h-48 rounded-lg"
            />
            <button
              type="button"
              className="btn btn-circle btn-xs btn-error absolute top-2 right-2"
              onClick={handleUsunObrazek}
            >
              ✕
            </button>
          </div>
        )}
      </fieldset>

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">❌ Treść fake newsa</label>
        <textarea
          name="trescFakeNewsa"
          className="textarea textarea-bordered w-full"
          placeholder="Opisz dokładnie fałszywą informację/tezę którą obalasz..."
          rows={3}
          required
        />
        <p className="text-xs opacity-60 mt-1">
          Dokładne przytoczenie fałszywej tezy wraz z przykładami jej
          występowania
        </p>
      </fieldset>

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">✅ Wyjaśnienie</label>
        <textarea
          name="wyjasnienie"
          className="textarea textarea-bordered w-full"
          placeholder="Wyjaśnij dlaczego ta informacja jest fałszywa, jakie techniki manipulacji zastosowano..."
          rows={5}
          required
        />
        <p className="text-xs opacity-60 mt-1">
          Analiza wyjaśniająca dlaczego dana informacja jest fałszywa i jaki
          jest prawdziwy stan faktyczny
        </p>
      </fieldset>

      <fieldset className="fieldset" disabled={isFetching}>
        <label className="label font-semibold">📚 Źródła</label>
        <p className="text-xs opacity-60 mb-2">
          Dodaj linki do badań naukowych, oficjalnych raportów lub wypowiedzi
          ekspertów
        </p>

        <div className="flex flex-col gap-2">
          {zrodla.map((zrodlo, index) => (
            <div key={index} className="flex gap-2">
              <input
                name={`zrodlo_${index}`}
                type="url"
                className="input input-bordered flex-1"
                placeholder="https://..."
                value={zrodlo}
                onChange={(e) => handleZmienZrodlo(index, e.target.value)}
              />
              {zrodla.length > 1 && (
                <button
                  type="button"
                  className="btn btn-error btn-outline"
                  onClick={() => handleUsunZrodlo(index)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn btn-outline btn-sm w-fit"
            onClick={handleDodajZrodlo}
          >
            ➕ Dodaj kolejne źródło
          </button>
        </div>
      </fieldset>

      <button
        type="submit"
        className="btn btn-primary mt-4"
        disabled={isFetching}
      >
        {isFetching ? 'Przesyłanie do recenzji...' : '📤 Prześlij do recenzji'}
      </button>

      <p className="text-xs opacity-60 text-center">
        Post zostanie sprawdzony przez innych redaktorów przed publikacją
      </p>
    </fetcher.Form>
  );
};

export default AddPostForm;
