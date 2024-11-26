import Form from 'next/form';
import { X, Search } from 'lucide-react';
import ResetSearchForm from './ResetSearchForm';

function SearchForm({ query }: { query?: string }) {
  return (
    <Form action={'/'} className="search-form" id="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      {query && <ResetSearchForm />}
      <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
      </button>
    </Form>
  );
}

export default SearchForm;
