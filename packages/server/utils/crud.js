const createDocument = async (collectionInstance, documentData, options = {}) => {
  try {
    const newDocument = new collectionInstance(documentData);
    const createdDocument = await newDocument.save(options);
    console.log("New Document:", createdDocument);
    return createdDocument;
  } catch (error) {
    console.error("Create Document Failed:", error);
    throw error;
  }
}

const updateDocument = async (collectionInstance, filter, updateFields, options = {}) => {
  try {
    const updatedDoc = await collectionInstance.findOneAndUpdate(
      filter,
      { $set: updateFields },
      {...options, new: true}
    );
    if (updatedDoc) {
      console.log("Updated Document:", updatedDoc);
      return updatedDoc;
    } else {
      console.error("Failed to find matching document, cannot update.");
      return null;
    }
  } catch (error) {
    console.error("Update Document Failed:", error);
    throw error;
  }
}

const pushElementToDocument = async (collectionInstance, filter, obj, options = {}) => {
  try {
    const updatedDoc = await collectionInstance.findOneAndUpdate(
      filter,
      { $push: obj },
      { ...options, new: true }
    );
    if (updatedDoc) {
      console.log("Updated Document:", updatedDoc);
      return updatedDoc;
    } else {
      console.error("Failed to find matching document, cannot update.");
      return null;
    }
  } catch (error) {
    console.error("Update Document Failed:", error);
    throw error;
  }
}
const pushAndSetUpdateDocument = async (collectionInstance, filter, objSet, objPushed, options = {}) => {
  try {
    const updatedDoc = await collectionInstance.findOneAndUpdate(
      filter,
      { 
        $push: objPushed,
        $set: objSet 
      },
      { ...options, new: true }
    );
    if (updatedDoc) {
      console.log("Updated Document:", updatedDoc);
      return updatedDoc;
    } else {
      console.error("Failed to find matching document, cannot update.");
      return null;
    }
  } catch (error) {
    console.error("Update Document Failed:", error);
    throw error;
  }
}

const deleteDocument = async (collectionInstance, filter, options = {}) => {
  try {
    const deletedDoc = await collectionInstance.findOneAndDelete(filter, options);
    if (deletedDoc) {
      console.log("Deleted Document:", deletedDoc);
      return deletedDoc;
    } else {
      console.error("No matching document found, cannot delete.");
      return null;
    }
  } catch (error) {
    console.error("Failed to delete document:", error);
    throw error;
  }
}

const findDocuments = async (collectionInstance, filter, session=null) => {
  try {
    let foundDocuments = null;
    if (session) foundDocuments = await collectionInstance.find(filter).session(session);
    else foundDocuments = await collectionInstance.find(filter);
    console.log("Documents Found:", foundDocuments);
    return foundDocuments;
  } catch (error) {
    console.error("Failed to find documents:", error);
    throw error;
  }
}

const findDocument = async (collectionInstance, filter, session=null) => {
  try {
    let foundDocument = null;
    if (session) foundDocument = await collectionInstance.findOne(filter).session(session);
    else foundDocument = await collectionInstance.findOne(filter);
    console.log("Document Found:", foundDocument);
    return foundDocument;
  } catch (error) {
    console.error("Failed to find documents:", error);
    throw error;
  }
}

const deleteDocuments = async (collectionInstance, filter, options = {}) => {
  try {
    const deletedDocuments = await collectionInstance.deleteMany(filter, options);
    console.log("Documents Deleted:", deletedDocuments);
    return deletedDocuments;
  } catch (error) {
    console.error("Failed to delete documents:", error);
    throw error;
  }
}

const insertDocuments = async (collectionInstance, documents, options = {}) => {
  try {
    const insertedDocuments = await collectionInstance.insertMany(documents, options);
    console.log("Documents Inserted:", insertedDocuments);
    return insertedDocuments;
  } catch (error) {
    console.error("Failed to insert documents:", error);
    throw error;
  }
}

module.exports.findDocuments = findDocuments;
module.exports.findDocument = findDocument;
module.exports.createDocument = createDocument;
module.exports.updateDocument = updateDocument;
module.exports.deleteDocument = deleteDocument;
module.exports.pushElementToDocument = pushElementToDocument;
module.exports.pushAndSetUpdateDocument = pushAndSetUpdateDocument;
module.exports.deleteDocuments = deleteDocuments;
module.exports.insertDocuments = insertDocuments;
