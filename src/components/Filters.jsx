import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
    const [selectedEngineSizes, setSelectedEngineSizes] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handleEngineSizeChange = (size) => {
        setSelectedEngineSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const handlePriceChange = (e, type) => {
        const value = parseInt(e.target.value) || 0;
        setPriceRange(prev => ({ ...prev, [type]: value }));
    };

    const applyFilters = () => {
        onFilterChange({
            categories: selectedCategories,
            brands: selectedBrands,
            priceRange,
            engineSizes: selectedEngineSizes
        });
        setIsOpen(false);
    };

    const resetFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setPriceRange({ min: 0, max: 50000 });
        setSelectedEngineSizes([]);
        onFilterChange({
            categories: [],
            brands: [],
            priceRange: { min: 0, max: 50000 },
            engineSizes: []
        });
    };

    return (
        <>
            <button
                className="filter-toggle btn btn-outline"
                onClick={() => setIsOpen(true)}
            >
                <Filter size={18} style={{ marginRight: '0.5rem' }} /> Filters
            </button>

            <aside className={`filters-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="filters-header">
                    <h3>Filters</h3>
                    <button className="close-filters" onClick={() => setIsOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="filter-group">
                    <h4>CLASS</h4>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('Supersport')}
                            onChange={() => handleCategoryChange('Supersport')}
                        />
                        <span className="checkmark"></span> Supersport
                    </label>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('Hyper Naked')}
                            onChange={() => handleCategoryChange('Hyper Naked')}
                        />
                        <span className="checkmark"></span> Hyper Naked
                    </label>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('Adventure')}
                            onChange={() => handleCategoryChange('Adventure')}
                        />
                        <span className="checkmark"></span> Adventure
                    </label>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes('Cafe Racer')}
                            onChange={() => handleCategoryChange('Cafe Racer')}
                        />
                        <span className="checkmark"></span> Cafe Racer
                    </label>
                </div>

                <div className="filter-group">
                    <h4>BRANDS</h4>
                    <div className="brands-grid-filter">
                        {['Ducati', 'Yamaha', 'BMW', 'Kawasaki', 'Honda', 'Suzuki', 'Aprilia', 'KTM'].map(brand => (
                            <label key={brand} className="checkbox-wrap">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleBrandChange(brand)}
                                />
                                <span className="checkmark"></span> {brand}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <h4>PRICE RANGE</h4>
                    <div className="price-inputs">
                        <div className="price-field">
                            <label>Min</label>
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={(e) => handlePriceChange(e, 'min')}
                                placeholder="0"
                            />
                        </div>
                        <div className="price-separator">-</div>
                        <div className="price-field">
                            <label>Max</label>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={(e) => handlePriceChange(e, 'max')}
                                placeholder="50000"
                            />
                        </div>
                    </div>
                </div>

                <div className="filter-group">
                    <h4>ENGINE SIZE</h4>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedEngineSizes.includes('lt600')}
                            onChange={() => handleEngineSizeChange('lt600')}
                        />
                        <span className="checkmark"></span> &lt; 600cc
                    </label>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedEngineSizes.includes('600-999')}
                            onChange={() => handleEngineSizeChange('600-999')}
                        />
                        <span className="checkmark"></span> 600cc - 999cc
                    </label>
                    <label className="checkbox-wrap">
                        <input
                            type="checkbox"
                            checked={selectedEngineSizes.includes('1000plus')}
                            onChange={() => handleEngineSizeChange('1000plus')}
                        />
                        <span className="checkmark"></span> 1000cc+
                    </label>
                </div>

                <div className="filter-actions">
                    <button className="btn btn-primary full-width" onClick={applyFilters}>
                        Apply Filters
                    </button>
                    <button
                        className="btn full-width"
                        style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}
                        onClick={resetFilters}
                    >
                        Reset
                    </button>
                </div>
            </aside>

            {isOpen && <div className="filters-overlay" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Filters;
