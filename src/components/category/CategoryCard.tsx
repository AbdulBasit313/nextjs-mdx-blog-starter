import React from 'react'

interface CategoryProps {
  imageSrc: string
  altText: string
  categoryName: string
}

const Category: React.FC<CategoryProps> = ({ imageSrc, altText, categoryName }) => {
  return (
    <a className="flex cursor-pointer flex-col">
      <figure className="relative h-[86px] w-[86px] overflow-hidden rounded-full bg-light transition-colors duration-300 hover:bg-light-hover">
        <img
          className="absolute inset-0 h-full w-full transform rounded-md object-contain p-4 transition-transform duration-300 ease-in-out hover:scale-110"
          src={imageSrc}
          alt={altText}
        />
      </figure>
      <h3 className="mt-3 text-center text-base font-semibold text-secondary">{categoryName}</h3>
    </a>
  )
}

export default Category
