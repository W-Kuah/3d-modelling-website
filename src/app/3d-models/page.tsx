import {getModels} from '@/app/lib/models';
import ModelsGrid from '@/app/components/ModelsGrid';
import { ModelPageProps } from '../types';

export default async function ModelsPage({searchParams}: ModelPageProps) {

  const models = await getModels();
  const query = (await searchParams)?.query?.toLowerCase() || "";
  
  const filteredModels = query
    ? models.filter(model => 
      model.name.toLowerCase().includes(query) ||
      model.description.toLowerCase().includes(query)
    )
    : models;
  return (
    <>
      <form className="w-full px-5 md:px-0 md:max-w-xl">
        <label htmlFor="search-3d-models" className="sr-only">Search 3D Models</label>
        <input 
          type="text"
          name="query"
          placeholder="E.g. tool"
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none"
        />
      </form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  );
}
 