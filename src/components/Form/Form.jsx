import { useState } from 'react';
import { isValidUrl } from '../../utils';
import InputField from '../common/InputField';
import Category from './Category';
import ColorPicker from './ColorPicker';
import WebSiteUrlInput from './WebSiteUrlInput';

export default function Form({ items, setItems }) {
  const [formData, setFormData] = useState({
    url: '',
    color: '',
    category: '',
    userName: '',
    passWord: '',
    createdAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.url !== '' &&
      formData.color !== '' &&
      formData.category !== '' &&
      formData.userName !== '' &&
      formData.passWord !== '' &&
      isValidUrl(formData.url) &&
      formData.passWord.length >= 6
    ) {
      // if (!items.find((item) => item.url === formData.url)) {
      //   const newItem = {
      //     ...formData,
      //     createdAt: new Date().toISOString(),
      //   };

      //   setItems((prev) => [...prev, newItem]);
      // }
      const newItem = {
        ...formData,
        createdAt: new Date().toISOString(),
      };

      setItems((prev) => [...prev, newItem]);
    }
    setFormData({
      url: '',
      color: '',
      category: '',
      userName: '',
      passWord: '',
      createdAt: '',
    });
  };

  const resetBtn = () => {
    setFormData({
      url: '',
      color: '',
      category: '',
      userName: '',
      passWord: '',
      createdAt: '',
    });
  };
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <form
          onSubmit={handleSubmit}
          className="mb-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 p-8 shadow-2xl shadow-black/40 backdrop-blur"
        >
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
              <WebSiteUrlInput
                formData={formData}
                handleChange={handleChange}
              />

              {/* <!-- Color Picker --> */}
              <ColorPicker formData={formData} handleChange={handleChange} />

              {/* <!-- Category Select --> */}
              <Category formData={formData} handleChange={handleChange} />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* <!-- Username Input --> */}
              <InputField
                formData={formData.userName}
                handleChange={handleChange}
                name={'userName'}
                type={'text'}
                text={'Use workspace or personal handle.'}
              />

              {/* <!-- Password Input --> */}
              <InputField
                formData={formData.passWord}
                handleChange={handleChange}
                name={'passWord'}
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
                onClick={resetBtn}
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
