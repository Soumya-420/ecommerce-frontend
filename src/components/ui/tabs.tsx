import React, { useId, useState } from 'react';

type TabsRootProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
};

const TabsContext = React.createContext<{ value: string; setValue: (v: string) => void } | null>(null);

export function Tabs({ defaultValue, value, onValueChange, className = '', children, ...rest }: TabsRootProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? '');
  const current = isControlled ? value! : internal;
  const setValue = (v: string) => {
    if (!isControlled) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <div className={className} {...rest}>
      <TabsContext.Provider value={{ value: current, setValue }}>{children}</TabsContext.Provider>
    </div>
  );
}

export function TabsList({ className = '', ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`ui-tabs-list ${className}`} {...rest} />;
}

type TriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string };
export function TabsTrigger({ value, className = '', ...rest }: TriggerProps) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.value === value;
  return (
    <button
      data-state={active ? 'active' : 'inactive'}
      className={`ui-tabs-trigger ${className}`}
      onClick={() => ctx?.setValue(value)}
      {...rest}
    />
  );
}

type ContentProps = React.HTMLAttributes<HTMLDivElement> & { value: string };
export function TabsContent({ value, className = '', ...rest }: ContentProps) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;
  return <div className={className} {...rest} />;
}


