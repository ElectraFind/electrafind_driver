import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function History({ transactions }) {

  const TransactionCard = ({ transaction }) => {
    const [expanded, setExpanded] = useState(false);

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardRow}>
            <Ionicons name="calendar-outline" size={24} color="black" />
            <Text style={styles.cardDate}>{transaction.date}</Text>
          </View>
          <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.cardDropdown}>
            <Ionicons
              name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardRow}>
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={styles.cardReference}>Reference</Text>
            <Text style={styles.cardText}>{transaction.reference}</Text>
          </View>
          <View style={styles.cardRow}>
            <Ionicons name="cash-outline" size={24} color="black" />
            <Text style={styles.cardReference}>Amount</Text>
            <Text style={styles.cardText}>{transaction.amount}</Text>
          </View>
          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.invoiceButtonText}>Get Invoice</Text>
          </TouchableOpacity>
        </View>
        {expanded && (
          <View style={styles.expandedContent}>
            <View style={styles.expandedRow}>
              <Ionicons name="time-outline" size={24} color="black" />
              <Text style={styles.expandedText}>Start Time</Text>
              <Text style={styles.expandedText}>{transaction.startTime}</Text>
            </View>
            <View style={styles.expandedRow}>
              <Ionicons name="time-outline" size={24} color="black" />
              <Text style={styles.expandedText}>End Time</Text>
              <Text style={styles.expandedText}>{transaction.endTime}</Text>
            </View>
            <View style={styles.expandedRow}>
              <Ionicons name="timer-outline" size={24} color="black" />
              <Text style={styles.expandedText}>Duration</Text>
              <Text style={styles.expandedText}>{transaction.duration}</Text>
            </View>
            <View style={styles.expandedRow}>
              <Ionicons name="checkmark-circle-outline" size={24} color="black" />
              <Text style={styles.expandedText}>Status</Text>
              <Text style={styles.expandedText}>{transaction.status}</Text>
            </View>
            <View style={styles.expandedRow}>
              <Ionicons name="flash-outline" size={24} color="black" />
              <Text style={styles.expandedText}>Energy Delivered</Text>
              <Text style={styles.expandedText}>{transaction.energyDelivered}</Text>
            </View>
            <View style={styles.expandedRow}>
              <Ionicons name="alert-circle-outline" size={24} color="black" />
              <Text style={styles.expandedText}>Stop Reason</Text>
              <Text style={styles.expandedText}>{transaction.stopReason}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => <TransactionCard transaction={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardDate: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardReference: {
    marginLeft: 10,
    fontSize: 14,
    color: '#888',
  },
  cardText: {
    fontSize: 16,
    marginLeft: 5,
  },
  invoiceButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00AB82',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  invoiceButtonText: {
    color: '#00AB82',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDropdown: {
    marginLeft: 10,
  },
  expandedContent: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  expandedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  expandedText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
});


