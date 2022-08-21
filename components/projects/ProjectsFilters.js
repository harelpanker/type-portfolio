import { RadioGroup } from '@headlessui/react';

const ProjectsFilters = ({
  buttons,
  activeTag,
  setActiveTag,
  filterHandler,
}) => {
  return (
    <RadioGroup
      className='flex gap-y-1 gap-x-3 flex-wrap mb-12'
      value={activeTag}
      onChange={setActiveTag}>
      {buttons.map((btn) => (
        <RadioGroup.Option
          onClick={(e) => filterHandler(e)}
          key={btn.id}
          value={btn.name}>
          {({ checked }) => (
            <button
              value={btn.name}
              className={`${
                checked
                  ? 'bg-gray-900 text-gray-200'
                  : 'bg-gratext-gray-200 text-gray-900'
              } relative hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-1 overflow-hidden z-20 group text-center px-4 md:px-8 py-1 md:py-3 text-sm md:text-lg font-medium`}>
              {btn.name}
            </button>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default ProjectsFilters;
