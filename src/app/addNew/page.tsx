"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type InputType = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};
const AddNew = () => {
  const [inputs, setInputs] = useState<InputType>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();

  const router = useRouter();

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const changeOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  };

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file!);
    formData.append("upload_preset", "restaurant");

    const res = await fetch("https://api.cloudinary.com/v1_1/drwa2jhdf/image/upload", {
      method: "POST",
      body: formData,
    });

    const resData = await res.json();
    return resData.url;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = await upload();
      console.log(" Url  " + url);
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:px-20 xl:px-40 flex items-center justify-center text-red-500">
      <form className="flex flex-wrap gap-6 relative" onSubmit={handleSubmit}>
        <h1 className=" text-xl md:text-4xl mt-60 md:mt-20 lg:mt-40 text-gray-300 font-bold">
          Add New Product
        </h1>
        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="file"
            className="text-sm  cursor-pointer flex items-center"
          >
            <Image src="/upload.png" alt="" width={30} height={20} />{" "}
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleImage}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Title</label>
          <input
            className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200"
            type="text"
            placeholder="Bella Napoli"
            name="title"
            onChange={handleInput}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Description</label>
          <textarea
            rows={3}
            placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
            name="desc"
            onChange={handleInput}
            className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Price</label>
          <input
            type="number"
            placeholder="Bella Napoli"
            name="price"
            className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200"
            onChange={handleInput}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Category</label>
          <input
            type="text"
            placeholder="pizzas"
            name="catSlug"
            className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200"
            onChange={handleInput}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="text-sm">Options</label>
          <div className="md:flex lg:flex gap-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200 mb-10"
              onChange={changeOption}
            />
            <input
              type="number"
              placeholder="additionalPrice"
              name="additionalPrice"
              min={0}
              className="ring-1 ring-red-200 p-4 outline-none rounded-md placeholder:text-red-200 mb-10"
              onChange={changeOption}
            />
            <div
              className="bg-gray-500 p-2 text-white rounded-sm mb-10 cursor-pointer"
              onClick={() => setOptions((prev) => [...prev, option])}
            >
              Add Option
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-2 gap-4">
          {options.map((option) => (
            <div
              className="p-2 bg-gray-200 text-gray-400 rounded-md"
              key={option.title}
            >
              <span>{option.title}</span>
              <span className="text-xs">(+ ${option.additionalPrice})</span>
            </div>
          ))}
        </div>
        <button className="bg-red-500 p-4 text-white md:w-48 md:h-14 rounded-md absolute bottom-0 right-0">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNew;
