import InputField from '../common/InputField';
import Category from './Category';
import ColorPicker from './ColorPicker';
import WebSiteUrlInput from './WebSiteUrlInput';

export default function Form() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <form className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              New bookmark
            </p>
            <h2 className="text-2xl font-semibold">
              Store website credentials safely
            </h2>
            <p className="text-sm text-neutral-400">
              Fill the details below. Your brand color helps us render a
              matching favicon.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* <!-- Website URL Input --> */}
              <WebSiteUrlInput />

              {/* <!-- Color Picker --> */}
              <ColorPicker />

              {/* <!-- Category Select --> */}
              <Category />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* <!-- Username Input --> */}
              <InputField
                name={'Username'}
                type={'text'}
                text={'Use workspace or personal handle.'}
              />

              {/* <!-- Password Input --> */}
              <InputField
                name={'Password'}
                type={'password'}
                text={'Choose at least 6 characters.'}
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-xs text-neutral-500">
              By submitting you confirm the entry is safe to store.
            </div>
            <div className="flex flex-1 justify-end gap-3">
              <button
                type="reset"
                className="w-full rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-neutral-500 hover:text-white md:w-auto"
              >
                Clear
              </button>
              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 md:w-auto"
              >
                Add Bookmark
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
