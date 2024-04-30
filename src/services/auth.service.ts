import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthTokenResponse } from "@supabase/supabase-js";

export const signupWithEmailPassword = async (
  email: string,
  password: string
): Promise<AuthTokenResponse> => {
  const supabase = createClientComponentClient();
  const res = await supabase.auth.signUp({ email, password }); // used signUp i/o signInWithEmailPassword

  return res;
};
