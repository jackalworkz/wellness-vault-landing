CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_type text NOT NULL CHECK (lead_type IN ('consultation','guide','ebook','session')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 80),
  email text NOT NULL CHECK (char_length(email) <= 180),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 20),
  reason text CHECK (reason IS NULL OR char_length(reason) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE INDEX leads_email_type_created_idx ON public.leads (lower(email), lead_type, created_at DESC);