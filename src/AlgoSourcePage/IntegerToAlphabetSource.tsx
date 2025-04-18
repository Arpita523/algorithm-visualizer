import { useNavigate } from "react-router-dom";

const IntegerToAlphabetSource = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/integer-to-alphabet');
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold font-serif">Integer to Alphabet Source</h2>
                    <button onClick={handleBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                            <span className="mr-2">←</span>
                            <span>Hide Source</span>
                    </button>
                </div>

                <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Converting between number systems with different bases</li>
                        <li>Working with character codes and string manipulation</li>
                        <li>Handling 1-based indexing in conversions</li>
                        <li>Building multi-character alphabetic sequences from integers</li>
                        <li>Practical application in spreadsheet column labeling (A, B, ..., Z, AA, AB, ...)</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Problem Statement</h3>
                    <p className="mb-4">
                        Given an integer value, convert it to an alphabetic representation where 1 represents 'A', 
                        2 represents 'B', and so on. After 'Z' (26), the sequence continues with 'AA' (27), 'AB' (28), etc., 
                        similar to Excel column headings.
                    </p>
                    <p>
                        For example:
                        <ul className="list-disc pl-6 mt-2">
                            <li>1 → A</li>
                            <li>26 → Z</li>
                            <li>27 → AA</li>
                            <li>28 → AB</li>
                            <li>703 → AAA</li>
                        </ul>
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Basic Implementation</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`function integerToAlphabet(num) {
  // Handle invalid inputs
  if (num <= 0) return "Invalid input";
  
  let result = "";
  
  // Convert integer to base-26 with adjustment for A=1, Z=26
  while (num > 0) {
    // We adjust by subtracting 1 to make it 0-indexed internally
    let remainder = (num - 1) % 26;
    
    // Convert to corresponding letter (A-Z)
    result = String.fromCharCode(65 + remainder) + result;
    
    // Integer division to get the quotient
    num = Math.floor((num - 1) / 26);
  }
  
  return result;
}

// Time Complexity: O(log n) - where n is the input number
// Space Complexity: O(log n) - for storing the result string`}
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">How the Algorithm Works</h3>
                    <p className="mb-4">
                        The algorithm essentially converts a decimal number to a custom base-26 number system where:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Adjustment for 1-based indexing:</span> Since A=1, B=2, etc. (not A=0, B=1), 
                            we subtract 1 from the input to work with 0-based calculations internally.
                        </li>
                        <li>
                            <span className="font-medium">Character mapping:</span> We use modulo 26 to get the remainder and map it to
                            a character (A-Z) using ASCII values (A = 65 in ASCII).
                        </li>
                        <li>
                            <span className="font-medium">Building multi-character output:</span> We prepend each character to the result
                            string and continue the process with the quotient until the number becomes 0.
                        </li>
                    </ol>
                    <p className="mt-4">
                        This approach is similar to converting from decimal to any other base, but with adjustments for the specific
                        requirements of the alphabetic representation.
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Example Walkthrough: Converting 28 to 'AB'</h3>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Start with num = 28</li>
                        <li>First iteration:
                            <ul className="list-disc pl-6 mt-1">
                                <li>remainder = (28-1) % 26 = 27 % 26 = 1</li>
                                <li>character = String.fromCharCode(65 + 1) = 'B'</li>
                                <li>result = "B"</li>
                                <li>num = Math.floor((28-1) / 26) = 1</li>
                            </ul>
                        </li>
                        <li>Second iteration:
                            <ul className="list-disc pl-6 mt-1">
                                <li>remainder = (1-1) % 26 = 0 % 26 = 0</li>
                                <li>character = String.fromCharCode(65 + 0) = 'A'</li>
                                <li>result = "A" + "B" = "AB"</li>
                                <li>num = Math.floor((1-1) / 26) = 0</li>
                            </ul>
                        </li>
                        <li>Since num = 0, we're done. The result is "AB".</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default IntegerToAlphabetSource;