
import React from 'react';
import { Sparkles, RotateCcw, Check } from 'lucide-react';
import { InfographicData, ThemeColors } from '../types';

interface CustomizationPanelProps {
  data: InfographicData;
  onUpdate: (updates: Partial<InfographicData>) => void;
}

interface ThemePreset {
  name: string;
  colors: ThemeColors;
}

const PRESET_THEMES: ThemePreset[] = [
  { name: 'الأحمر الصيفي', colors: { primary: '#e11d48', secondary: '#fbbf24', background: '#fffef2', text: '#1e293b' } },
  { name: 'كحلي المستثمر', colors: { primary: '#0f172a', secondary: '#0ea5e9', background: '#f0f9ff', text: '#0f172a' } },
  { name: 'فوشيا التحليل', colors: { primary: '#c026d3', secondary: '#3b82f6', background: '#fdf4ff', text: '#1e293b' } },
  { name: 'سيان الابتكار', colors: { primary: '#0891b2', secondary: '#1e293b', background: '#f0fdfa', text: '#1e293b' } },
  { name: 'لايم النمو', colors: { primary: '#65a30d', secondary: '#2563eb', background: '#f7fee7', text: '#1e293b' } },
  { name: 'برتقالي الحركة', colors: { primary: '#ea580c', secondary: '#f97316', background: '#fff7ed', text: '#1e293b' } },
  { name: 'الوضع الداكن', colors: { primary: '#111827', secondary: '#2dd4bf', background: '#0f172a', text: '#f1f5f9' } },
  { name: 'بنفسجي العمق', colors: { primary: '#7c3aed', secondary: '#3b82f6', background: '#f5f3ff', text: '#1e293b' } },
];

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ data, onUpdate }) => {
  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    onUpdate({
      colors: { ...data.colors, [key]: value }
    });
  };

  const isSelected = (theme: ThemePreset) => {
    return theme.colors.primary === data.colors.primary && 
           theme.colors.secondary === data.colors.secondary;
  };

  return (
    <div className="customization-panel">
      {/* Ready Themes Section */}
      <section>
        <h4 className="panel-header-label">
          الثيمات الجاهزة
        </h4>
        <div className="preset-grid">
          {PRESET_THEMES.map((theme) => (
            <button
              key={theme.name}
              onClick={() => onUpdate({ colors: theme.colors })}
              className={`preset-button ${isSelected(theme) ? 'active' : ''}`}
            >
              {isSelected(theme) && (
                <div className="preset-check">
                  <Check size={12} />
                </div>
              )}
              <div className="preset-info">
                <div className="preset-swatches">
                  <div className="preset-swatch" style={{ backgroundColor: theme.colors.secondary }}></div>
                  <div className="preset-swatch" style={{ backgroundColor: theme.colors.primary }}></div>
                </div>
                <span className="preset-name">{theme.name}</span>
              </div>
              <div className="preset-preview-bar">
                <div className="h-full" style={{ backgroundColor: theme.colors.background, width: '40%' }}></div>
                <div className="h-full" style={{ backgroundColor: theme.colors.primary, width: '60%' }}></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Manual Color Customization */}
      <section>
        <h4 className="panel-header-label">
          تخصيص الألوان
        </h4>
        <div className="color-picker-grid">
          <ColorPicker 
            label="الأساسي" 
            value={data.colors.primary} 
            onChange={(val) => handleColorChange('primary', val)} 
          />
          <ColorPicker 
            label="الثانوي" 
            value={data.colors.secondary} 
            onChange={(val) => handleColorChange('secondary', val)} 
          />
          <ColorPicker 
            label="الخلفية" 
            value={data.colors.background} 
            onChange={(val) => handleColorChange('background', val)} 
          />
          <ColorPicker 
            label="النصوص" 
            value={data.colors.text} 
            onChange={(val) => handleColorChange('text', val)} 
          />
        </div>
      </section>

      {/* CSS Editor Section */}
      <section className="css-editor-section">
        <h4 className="css-editor-label">
          <Sparkles size={14} /> محرر CSS المتقدم
        </h4>
        <div className="css-editor-container">
          <textarea
            value={data.customCss}
            onChange={(e) => onUpdate({ customCss: e.target.value })}
            className="css-editor-textarea"
            placeholder="... CSS اكتب كود"
            dir="ltr"
          />
          <div className="css-editor-reset">
            <RotateCcw 
              size={14} 
              onClick={() => confirm('تصفير الكود؟') && onUpdate({ customCss: '' })} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ColorPicker = ({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) => (
  <div className="color-picker-group">
    <label className="color-picker-label">{label}</label>
    <div className="color-picker-container">
      <input 
        type="color" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="color-picker-input"
      />
      <div className="color-picker-swatch" style={{ backgroundColor: value }}></div>
    </div>
  </div>
);

export default CustomizationPanel;
