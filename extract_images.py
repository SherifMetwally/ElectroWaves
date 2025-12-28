import fitz  # PyMuPDF
import os

def extract_images_from_pdf(pdf_path, output_dir="public/images/pdf"):
    """Extract all images from PDF using PyMuPDF"""
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    images_extracted = []
    doc = fitz.open(pdf_path)
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images()
        
        for img_index, img in enumerate(image_list):
            try:
                # Get image reference
                xref = img[0]
                
                # Extract image bytes
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Generate filename
                img_filename = f"page_{page_num + 1}_img_{img_index + 1}.{image_ext}"
                img_path = os.path.join(output_dir, img_filename)
                
                # Save image
                with open(img_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                images_extracted.append({
                    'page': page_num + 1,
                    'index': img_index + 1,
                    'filename': img_filename,
                    'path': img_path,
                    'ext': image_ext,
                    'width': base_image.get('width', 0),
                    'height': base_image.get('height', 0)
                })
                
                print(f"Extracted: {img_filename} from page {page_num + 1} ({base_image.get('width', 0)}x{base_image.get('height', 0)})")
                
            except Exception as e:
                print(f"Error extracting image {img_index + 1} from page {page_num + 1}: {e}")
                continue
    
    doc.close()
    return images_extracted

if __name__ == "__main__":
    pdf_path = "Electro Waves Profile 3.pdf"
    output_dir = "public/images/pdf"
    
    print("Extracting images from PDF...")
    images = extract_images_from_pdf(pdf_path, output_dir)
    
    print(f"\nExtracted {len(images)} images")
    print("\nExtracted images:")
    for img in images:
        print(f"  - {img['filename']} (Page {img['page']}, {img['width']}x{img['height']})")
